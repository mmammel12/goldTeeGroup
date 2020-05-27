from bottle import default_app, route, post, get, template, run, static_file

@route("/static/css/<filename>")
def css(filename):
    return static_file(filename, root="./static/css/")


@route("/static/js/<filename>")
def js(filename):
    return static_file(filename, root="./static/js/")

@get("/static/images/<filename>")
def image(filename):
    return static_file(filename, root="./static/images/")

@route("/")
def home():
    return template("index.html")

@post("/dataSuccess")
def dataSuccess():
    return template("dataSuccess.html")

application = default_app()

run(host="localhost", port=8080, debug=True)