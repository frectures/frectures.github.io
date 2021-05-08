const allCourses = [
    "Analysis und Lineare Algebra",
    "Diskrete Mathematik",
    "Optimierung",
    "Stochastik 1",
    "Stochastik 2",
    null,
    "Algorithmen und Datenstrukturen",
    "Berechenbarkeit, Komplexität und Approximation",
    "Data-driven Intelligent Systems",
    "Datenschutz in der Informationsgesellschaft",
    "Datenvisualisierung und GPU-Computing",
    "Digitale Mediensignalverarbeitung",
    "Einführung in die Bildverarbeitung",
    "Einführung in die Theoretische Informatik",
    "Eingebettete Systeme",
    "Ethics and IT",
    "Grundlagen von Datenbanken",
    "Hochleistungsrechnen",
    "Informatik im Kontext",
    "Interaktionsdesign",
    "Interaktive Computergrafik",
    "Gestaltung und Modellierung von Organisationen",
    "Methodenkompetenz",
    "Philosophie, Gesellschaft und IT",
    "Projektmanagement",
    "Rechnerstrukturen und Betriebssysteme",
    "Softwareentwicklung 1",
    "Softwareentwicklung 2",
    "Softwaretechnik",
    "Sprachdialogsysteme",
    "Urheberrecht in der Informationsgesellschaft",
    "Verteilte Systeme und Systemsicherheit",
    null,
    "Praktikum",
    "Projekt",
    "Proseminar",
    "Seminar",
    "Bachelorarbeit",
];
if (allCourses.length % 2 != 0) {
    allCourses.push(null);
}

window.onload = function () {
    const half = allCourses.length / 2;
    for (let i = 0; i < half; ++i) {
        appendRow(allCourses[i], allCourses[half + i]);
    }

    function appendRow(...rowCourses) {
        const table = document.getElementById("table");
        const tr = document.createElement("tr");

        for (course of rowCourses) {
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");

            if (course) {
                const input = document.createElement("input");
                input.type = "range";
                input.min = 0;
                input.max = 5;
                input.value = 0;

                td1.appendChild(input);
                td2.innerHTML = course;
            }

            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
    }
};
