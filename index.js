const viewMoreBtn = document.getElementById("viewMoreBtn");


viewMoreBtn.addEventListener('click', function(){
    document.getElementById('unit').style.display = 'block';
    document.getElementById('pass').style.display = 'block';
    document.getElementById('work').style.display = 'block';
    document.getElementById('btnDiv').style.display = 'none';
})
