
<?php
if (isset($_POST['action'])) {
    switch ($_POST['action']) {
        case 'submit':
            submit();
            break;
    }
}

function submit() {
    echo "My apologies but this is only a test, thus I will not get any message by now. Contact me through my Social Media Accounts";
    exit;
}

?>


