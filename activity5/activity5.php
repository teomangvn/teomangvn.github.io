<?php
//Teoman Güven 23050151039
//İsmet Gökay 21050111025
$rates = [
    'USD' => [
        'USD' => 1,
        'CAD' => 1.38,
        'EUR' => 0.92 
    ],
    'CAD' => [
        'USD' => 0.72,
        'CAD' => 1,
        'EUR' => 0.67
    ],
    'EUR' => [
        'USD' => 1.09,
        'CAD' => 1.50,
        'EUR' => 1
    ]
];

$from_value = '';
$from_currency = 'USD';
$to_value = '';
$to_currency = 'CAD';
$result = '';

// Process form submission
if (isset($_GET['convert'])) {
    $from_value = isset($_GET['from_value']) ? (float)$_GET['from_value'] : 0;
    $from_currency = substr($_GET['from_currency'], 1);
    $to_currency = substr($_GET['to_currency'], 1);     
    
    // Perform conversion
    if ($from_value > 0) {
        $to_value = $from_value * $rates[$from_currency][$to_currency];
        // Format the result with 2 decimal places
        $to_value = number_format($to_value, 2, '.', '');
        $result = "$from_value $from_currency = $to_value $to_currency";
    }
}
?>
<!DOCTYPE html>

<html lang="en">
<head>
    <title>Currency Calculation</title>
    <meta name="description" content="CENG 311 Inclass Activity 5" />
</head>

<body>
    <form action="activity5.php" method="GET">
        <table>
            <tr>
                <td>
                    From:
                </td>
                <td>
                    <input type="text" name="from_value" value="<?php echo $from_value; ?>"/>
                </td>
                <td>
                    Currency:
                </td>
                <td>
                    <select name="from_currency">
                        <option value="FUSD" <?php if ($from_currency == 'USD') echo 'selected'; ?>> USD </option>
                        <option value="FCAD" <?php if ($from_currency == 'CAD') echo 'selected'; ?>> CAD </option>
                        <option value="FEUR" <?php if ($from_currency == 'EUR') echo 'selected'; ?>> EUR </option>
                    </select>
                </td>    
            </tr>
            <tr>
                <td>
                    To:
                </td>
                <td>
                    <input type="text" name="to_value" value="<?php echo $to_value; ?>" readonly/>
                </td>
                <td>
                    Currency:
                </td>
                <td>
                    <select name="to_currency">
                        <option value="TUSD" <?php if ($to_currency == 'USD') echo 'selected'; ?>> USD </option>
                        <option value="TCAD" <?php if ($to_currency == 'CAD') echo 'selected'; ?>> CAD </option>
                        <option value="TEUR" <?php if ($to_currency == 'EUR') echo 'selected'; ?>> EUR </option>
                    </select>
                </td>    
            </tr>
            <tr>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                    <input type="submit" name="convert" value="convert"/>
                </td>    
            </tr>
        </table>
        
    </form>        
</body>
</html>