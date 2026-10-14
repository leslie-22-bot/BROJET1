<?php
// code.php - Traitement du formulaire de connexion

session_start();
require_once 'dbcon.php';

// Vérifier que le formulaire a été soumis
if (isset($_POST['valider'])) {

    // Récupérer et nettoyer les données
    $utilisateur = trim($_POST['utilisateur']);
    $mot_de_passe = $_POST['mot_de_passe'];

    // Vérifier que les champs ne sont pas vides
    if (empty($utilisateur) || empty($mot_de_passe)) {
        header('Location: index.php?error=empty');
        exit();
    }

    // Préparer la requête (protection contre les injections SQL)
    $stmt = $con->prepare("SELECT id_admins, nom_admin, mot_de_passe_hash FROM admins WHERE nom_admin = ?");
    $stmt->bind_param("s", $utilisateur);
    $stmt->execute();
    $result = $stmt->get_result();

    // Vérifier si un admin existe
    if ($result->num_rows === 1) {
        $admin = $result->fetch_assoc();

        // Vérifier le mot de passe
        if (password_verify($mot_de_passe, $admin['mot_de_passe_hash'])) {
            // Connexion réussie
            $_SESSION['admin_id'] = $admin['id_admins'];
            $_SESSION['admin_nom'] = $admin['nom_admin'];

            header('Location: dashboard.php');
            exit();
        } else {
            // Mauvais mot de passe
            header('Location: index.php?error=wrong');
            exit();
        }
    } else {
        // Utilisateur introuvable
        header('Location: index.php?error=wrong');
        exit();
    }

    $stmt->close();
}

$con->close();
?>