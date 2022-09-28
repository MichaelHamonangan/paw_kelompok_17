// event listener for the form with id "input-data"
$("#input_data").submit(function(event){
    alert("Data Inserted Successfully!");
})

// event listener for the form with id "update-data"
$("#update_data").submit(function(event){
    // prevent the default submit behaviour
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    // mapping data from the form to the data object
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    // create request with method put and url /api/lpg
    var request = {
        "url" : `http://localhost:3000/api/lpg/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    // send the request to the server
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})


if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");

    // event listener for the delete button
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        // create request with method delete and url /api/lpg/:id
        var request = {
            "url" : `http://localhost:3000/api/lpg/${id}`,
            "method" : "DELETE"
        }

        // confirm the delete action
        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                
                // reload the page
                location.reload();
            })
        }

    })
}