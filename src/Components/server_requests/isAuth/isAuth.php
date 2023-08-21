<?php
$sessionId = $_POST['sessionId'];

// Параметры подключения к базе данных
$servername = "localhost";
$dbname = "id20996864_pr1_users";
$username = "id20996864_dbuser";
$password_db = "09867Qq@";

// Подключение к базе данных
$conn = new mysqli($servername, $username, $password_db, $dbname);

// Проверка подключения к базе данных
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Подготовка запроса для получения данных пользователя
$stmt = $conn->prepare("SELECT sessionDate FROM sessions WHERE sessionId = ?");
$stmt->bind_param("i", $sessionId);
$stmt->execute();
$result = $stmt->get_result();

// Проверка наличия пользователя с такими данными в базе данных
if ($result->num_rows > 0) {
    echo "Cookies were found.";
} else {
    echo "Cookies weren't found.";
}

// Закрытие соединения с базой данных
$stmt->close();
$conn->close();
?>