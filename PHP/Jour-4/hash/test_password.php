<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Password</title>
</head>

<body>
    <h1>Test de vérification de mot de passe</h1>
    <form action="decrypt_password.php" method="POST">
        <label for="password">Mot de passe :</label>
        <input type="text" id="password" name="password" required>
        <label for="hashed_password">Mot de passe chiffré :</label>
        <input type="text" id="hashed_password" name="hashed_password" required>
        <button type="submit">Vérifier</button>
    </form>
</body>

</html>