function fun() {
    
    btn.addEventListener('click', function () {
        const btn = document.getElementById('btn');
        const ttlLec = document.getElementById('total-lec');
        const ttlAbs = document.getElementById('total-abs');
        const ttlDel = document.getElementById('delg');
        const res = document.getElementById('res');
        let TotalLec = ttlLec.value;
        let TotalAbs = ttlAbs.value;
        let TotalDeg = ttlDel.value;
        let Attendance = 100-(((TotalAbs-TotalDeg)/TotalLec)*100);
        res.innerText = "Attendence : " + Attendance;
        console.log(Attendance);
    })
}

