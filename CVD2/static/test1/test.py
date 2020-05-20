# 模拟检测模块
# 使用pydub还需安装ffmpeg

from pydub import AudioSegment


def channel(filename):
    path = "uploads/" + filename
    sound = AudioSegment.from_file(path)
    c = sound.channels
    if c == 2:
        return True
    else:
        return False


#sound = AudioSegment.from_mp3(r'E:\学习\spoofing detection\flask_test\uploads\warning.mp3')
#sound.export(r'E:\学习\spoofing detection\flask_test\uploads\warning.wav', format='wav')

