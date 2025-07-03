
document.getElementById("sendOTP").addEventListener("click", async () => {
   
    const email = document.querySelector("input[name='email']").value;
    const res = await fetch("/send-otp",{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    });
    const data = await res.text();
    document.getElementById("msg").innerText = data;
});