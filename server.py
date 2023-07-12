from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/photo')
def photo_time():
    query = request.args.get('q')
    return render_template('photo.twig', q=query)

@app.route('/')
def hello():
    return render_template('home.html')

if __name__ == '__main__':
    app.run()

    
