const paymentMethod = 'cash';

switch (paymentMethod) {
    case 'cash':
        console.log(`Paying with ${paymentMethod}`);
        break;
    case 'card':
        console.log(`Paying with ${paymentMethod}`);
        break;
    default:
        console.log('Please select a valid payment method');
        break;
}