from flask import Flask, render_template, request, url_for, abort, redirect, jsonify
from werkzeug.utils import secure_filename
import os
import sys
import jinja2
current_dir = os.getcwd()
sys.path.append(current_dir+"\\detect")
from detect.test import channel

app = Flask(__name__)


@app.route('/home')
def hello_flask():
    return render_template('index.html', flag=False)


# 文件储存至uploads文件夹
@app.route('/upload', methods=['POST', 'GET'])
def file_upload():
    file = request.files["file"]
    filename = secure_filename(file.filename)
    file.save(os.path.join("./uploads/", filename))
    c = channel(filename)   #true or false
    print(c)
    return jsonify({"flag": c})

    # print(c)
    # if c:
    #     print("i'm in")
    #     return render_template('render_test.html', flag=True)
    # else:
    #     return render_template('index.html', flag=False)


# 测试渲染功能  相关文件 render_test.html render_test.js
@app.route("/test", methods=['POST', 'GET'])
def test():
    if request.args:
        print(request.args)
        return render_template('render_test.html', flag=True)
    else:
        return render_template('render_test.html', flag=False)



if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", debug=True)
