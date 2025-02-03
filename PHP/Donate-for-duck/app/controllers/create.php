<?php
require_once __DIR__ . '/../../vendor/autoload.php';

use Dotenv\Dotenv;
use Stripe\StripeClient;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../../config/');
$dotenv->load();

$stripeSecretKey = $_ENV['STRIPE_SECRET_KEY_SERVER'];

$stripe = new StripeClient($stripeSecretKey);

function calculateOrderAmount(int $amount): int {
    if ($amount <= 0) {
        throw new InvalidArgumentException("Le montant doit être supérieur à 0.");
    }
    return $amount * 100;
}

header('Content-Type: application/json');

try {
    
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);

    if (!isset($jsonObj->amount) || !is_numeric($jsonObj->amount) || $jsonObj->amount < 1) {
        throw new Exception("Montant invalide : " . json_encode($jsonObj));
    }

    $paymentIntent = $stripe->paymentIntents->create([
        'amount' => calculateOrderAmount((int)$jsonObj->amount),
        'currency' => 'eur',
    ]);

    echo json_encode(['clientSecret' => $paymentIntent->client_secret]);
} catch (InvalidArgumentException $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => "Erreur interne : " . $e->getMessage()]);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode(['error' => "Erreur système : " . $e->getMessage()]);
}
