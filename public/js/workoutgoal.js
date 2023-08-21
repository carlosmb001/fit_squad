function fill_template() {
    var data = {
        title: "why handlebars is cool",
        list: [
            {name: "you can generate stuff"},
            {name: "it works on both ends"},
            {name: "it weights like 24 kilobytes"},
            {name: "haha templates go brrrrrrrr"}
        ],
        footer: "this is a footer"
    }; 
    var template = Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data);
    document.querySelector("#output").innerHTML = filled;
}