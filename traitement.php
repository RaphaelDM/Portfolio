<?php
// Connexion à la base de données
$host = "localhost"; // Le nom de votre hôte
$user = "root"; // Le nom d'utilisateur de votre base de données
$password = ""; // Le mot de passe de votre base de données
$dbname = "portfolio"; // Le nom de votre base de données
$conn = mysqli_connect($host, $user, $password, $dbname);

// Vérifier la connexion à la base de données
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Récupérer les valeurs du formulaire
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Insérer les valeurs dans la base de données
    $sql = "INSERT INTO formulaire (nom, prenom, email, message) VALUES ('$nom', '$prenom', '$email', '$message')";
    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Merci d'avoir rempli le formulaire !')</script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Fermer la connexion à la base de données
mysqli_close($conn);
header('Location: index.html');
?>