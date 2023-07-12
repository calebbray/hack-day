from flask import Flask, render_template

app = Flask(__name__)

@app.route('/photo')
def photo_time():
    name = "foobarbaz"
    return render_template('photo.twig', name=name)

@app.route('/')
def hello():
    return render_template('home.html')

if __name__ == '__main__':
    app.run()

    
