//Form adatfeltöltés, google spreadsheetbe.
const scriptURL = 'https://script.google.com/macros/s/AKfycbxj3ESZNGeJGSGHuiPQHw6Qp5sJvXZ1HXGJu5Hk/exec'
const form = document.forms['submit-to-google-sheet']

function submitForm(){
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert('Success!', response))
            .catch(error => alert('Error!', error.message))
            
        
    });
    
};


//Kapcsolattartási személy választó
$('#contactType').change(function () {
    selection = $(this).val();
    switch (selection) {
        case 'edesanya':
            $('#edesanya').show();
            $('#edesapa').hide();
            $('#mindketten').hide();
            break;
        case 'edesapa':
            $('#edesapa').show();
            $('#edesanya').hide();
            $('#mindketten').hide();
            break;
        case 'mindketten':
            $('#mindketten').show();
            $('#edesanya').hide();
            $('#edesapa').hide();
            break;
        case 'valassz':
            $('#mindketten').hide();
            $('#edesanya').hide();
            $('#edesapa').hide();
            break;
        default:
            $('#edesanya', '#edesapa', '#mindketten').hide();
            break;
        
    }
});

//Ministrans szolgálat választó.
jQuery('#ministransType').change(function () {
    selection = $(this).val();
    switch (selection) {
        case 'valassz':
            $('#ministraltam').hide();
            $('#nemministraltam').hide();
            break;
        case 'ministraltam':
            $('#ministraltam').show();
            $('#nemministraltam').hide();
            break;
        case 'nemministraltam':
            $('#nemministraltam').show();
            $('#ministraltam').hide();
            break;
        default:
            $('#ministraltam', '#nemministraltam').hide();
            break;

    }
});
