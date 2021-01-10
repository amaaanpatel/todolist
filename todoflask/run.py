
import os,sys
from app import app
#set the root path for the modeules
ROOT_PATH = os.path.dirname(os.path.realpath(__file__))
#set the root path to the enviroment variable
os.environ.update({'ROOT_PATH': ROOT_PATH})
sys.path.append(os.path.join(ROOT_PATH, 'todoflask'))


if __name__ == '__main__':
    app.run()