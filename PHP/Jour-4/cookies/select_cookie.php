<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choisir une couleur</title>
</head>

<body>
    <form action="index.php" method="POST">
        <label for="color">Choisissez une couleur :</label>
        <select name="color" id="color">
            <option value="Noir">Noir</option>
            <option value="Rouge">Rouge</option>
            <option value="Bleu">Bleu</option>
        </select>
        <button type="submit">Valider</button>
    </form>
</body>

</html>