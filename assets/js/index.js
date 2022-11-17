// event listener dari form "input-data"
$("#input_data").submit(function(event){
    alert("Data Inserted Successfully!");
})

// event listener dari form "update-data"
$("#update_data").submit(function(event){
    // Mencegah behaviour terkait default submit
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    // mapping data dari form ke objek data 
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    // membuat request dengan method put dan url /api/lpg
    var request = {
        "url" : `http://localhost:3000/api/lpg/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    // mengirim request ke server
    $.ajax(request).done(function(response){
        alert("Data berhasil diperbarui!");
    })

})


if(window.location.pathname == "/penjualan-lpg"){
    $ondelete = $(".table tbody td a.delete");

    // event listener untuk tombol delete
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        // membuat request dengan method delete dan url /api/lpg/:id
        var request = {
            "url" : `http://localhost:3000/api/lpg/${id}`,
            "method" : "DELETE"
        }

        // konfirmasi aksi delete
        if(confirm("Apakah anda benar-benar ingin menghapus data ini?")){
            $.ajax(request).done(function(response){
                alert("Data berhasil dihapus!");
                
                // memuat ulang halaman
                location.reload();
            })
        }
    })
}