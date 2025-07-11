<?php
header('Content-Type: text/html; charset=utf-8');
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        file_put_contents('data/emaillist.txt', $email.PHP_EOL, FILE_APPEND | LOCK_EX);
        $csvData = array(
            array($email, date('Y-m-d H:i:s'))
        );
        $fp = fopen('data/emaillist.csv', 'a');
        foreach ($csvData as $row) {
            fputcsv($fp, $row);
        }
        fclose($fp);
        header("Location: thanks.html");
        exit();
    } else {
        header("Location: index.html");
        exit();
    }
} else {
    header("Location: index.html");
    exit();
}
?>
