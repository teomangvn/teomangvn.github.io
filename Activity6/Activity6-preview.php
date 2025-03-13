<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name     = $_POST['name'] ?? 'Not provided';
    $username = $_POST['username'] ?? 'Not provided';
    $password = $_POST['password'] ?? 'Not provided';
    $address  = !empty($_POST['address']) ? $_POST['address'] : 'Not provided';
    $country  = $_POST['country'] ?? 'Not provided';
    $zip      = !empty($_POST['zip']) ? $_POST['zip'] : 'Not provided';
    $email    = $_POST['email'] ?? 'Not provided';
    $sex      = $_POST['sex'] ?? 'Not provided';
    $languages = $_POST['language'] ?? [];
    $about    = !empty($_POST['about']) ? $_POST['about'] : 'Not provided';

    echo "<h1>Preview</h1>";
    echo "{$name}<br>";
    echo "{$username}<br>";
    echo "{$password}<br>";
    echo "Address: {$address}<br>";
    echo "{$country}<br>";
    echo "Zip: {$zip}<br>";
    echo "{$email}<br>";
    echo "Sex: {$sex}<br>";

    foreach ($languages as $language) {
        echo "{$language}<br>";
    }

    echo "About: {$about}";
} else {
    echo "<h1>Error: No data submitted!</h1>";
}
?>
