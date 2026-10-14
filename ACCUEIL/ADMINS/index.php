<?php
session_start();

// Si l'admin est déjà connecté, on le redirige vers le dashboard
if (isset($_SESSION['admin_id'])) {
    header('Location: detailadmin.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion Admin - Lily Prestige</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>

<h2>BIENVENUE DANS VOTRE ESPACE DE CONNEXION POUR ACCÉDER À LA PAGE D'ADMINISTRATION DE LILY PRESTIGE</h2>

<p>Gérez facilement vos produits, suivez vos stocks et consultez vos commandes en toute simplicité.</p>
<p>Prenez le contrôle de votre boutique et offrez à chaque client une expérience d'achat élégante, confortable et inoubliable.</p>

<main>

    <!-- Affichage des messages d'erreur -->
    <?php if (isset($_GET['error'])): ?>
        <p style="color:red; font-weight:bold;">
            <?php 
                if ($_GET['error'] == 'empty') echo "Veuillez remplir tous les champs.";
               
            ?>
        </p>
    <?php endif; ?>

    <form action="detailadmin.php" method="POST">
        <div class="formulaire">
            <label for="utilisateur">Nom d'utilisateur</label>
            <input type="text" id="utilisateur" name="utilisateur" placeholder="Entrez votre nom d'utilisateur" required>

            <label for="mot_de_passe">Mot de passe</label>
            <input type="password" id="mot_de_passe" name="mot_de_passe" placeholder="Entrez votre mot de passe" required>

            <button type="submit" name="valider">VALIDER</button>
        </div>
    </form>
</main>

</body>
</html>