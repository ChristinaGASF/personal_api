console.log("Sanity Check: JS is working!");
var $statesList;
var allStates = [];

$(document).ready(function(){

// Get all 
$.ajax({
    method: 'GET',
    url: '/api/states',
    success: handleSuccess,
    error: handleError
});
function handleSuccess (json) {
    var states = json.data
    states.forEach( states => {
//        $('#statesTarget').append(`<li><p id="name">${states.name}</p><p id="nickname">${states.nickname}<p><p id="year">opened ${states.yearOpened}</p>
//        <button type="update" value="update" class="update" data-id=${states._id}>Update</button> <button type="delete" value="delete" class="delete" data-id=${states._id}>Delete</button></li>`);
    });
};

//Error
function handleError(e) {
    console.log('error', e);
    $('#statesTarget').text('Failed to laod states, is the server working?');
}

});