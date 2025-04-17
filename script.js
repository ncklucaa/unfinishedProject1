document.getElementById("loginBtn").addEventListener("click", function ()
{
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "Nick" && password === "admin")
    {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    }
    else
    {
        document.getElementById("loginError").style.display = "block";
    }
});

document.getElementById("loadBtn").addEventListener("click", () => {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function ()
{
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e)
    {
        const lines = e.target.result.split("\n");
        const tbody = document.querySelector("#ticketTable tbody");
        tbody.innerHTML = "";

        lines.forEach((line) => {
            if (line.trim() === "") return;
            const parts = line.split(" | ");
            const row = document.createElement("tr");
            parts.forEach((p) =>
            {
                const cell = document.createElement("td");
                cell.textContent = p.trim();
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
    };

    reader.readAsText(file);
});
