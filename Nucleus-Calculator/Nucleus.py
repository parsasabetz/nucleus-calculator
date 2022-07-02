import eel
from datetime import datetime
# IMPORTING APP FUNCTIONALITIES 
from calculations import numeric_meval
from logs_manager import get_date_expression, pick_last_10, pick_all

eel.init('frontend')

# Getting results
run_count = 1
@eel.expose
def get_num_data(num_exp):
    result = numeric_meval(num_exp)
    global run_count
    exp_datetime = datetime.now()
    exp_date_time = exp_datetime.strftime("%Y-%m-%d %H:%M:%S")
    expression = num_exp
    get_date_expression(exp_date_time, expression, result, run_count)
    run_count += 1
    return result

# Getting last 10 history
@eel.expose
def get_history_data():
    return pick_last_10()

# Getting the entire logs
@eel.expose
def get_logs_data():
    return pick_all()


eel.start('index.html', size=(1350, 910))


# App made by Parsa SabetZadeh
# Copyright 2022©, all rights served & belong to Parsa SabetZadeh, The creator, designer and developer of Nucleus Scientific Calculator.
# Modification and fair use under the copyright and MIT license only allowed (personal and educational), no publication without credits is allowed.
# Software is released AS IT IS, on July 2, 2022 under the version of 1.1, release of July 2, 2022.
# By opening the codebase to this app you agree to all copyright and licenses bonded with this software and its complete codebase and repository.