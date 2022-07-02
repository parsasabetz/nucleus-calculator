import os

def find(name, path):
    for root, dirs, files in os.walk(path):
        if name in files:
            logs_path = os.path.join(root, name)
            return logs_path

logs_path = find('logs_and_history_nucleus.txt', '/')

def count_file_logs():
    with open(logs_path, 'r+') as current:
        lines = len(current.readlines())
        lines_list = current.readlines()
    if (lines >= 101):
        with open(logs_path, 'r') as fin:
            data = fin.read().splitlines(True)
        with open(logs_path, 'w') as fout:
            fout.writelines(data[1:])
    return lines

log_lines = count_file_logs()

def get_date_expression(exp_date_time, expression, result, run_count):

    update_lines = log_lines + run_count
    latest_log = f'Expression: {expression} = {result}  ,  On: {exp_date_time}\n'

    with open(logs_path, "a+") as f:
        f.write(latest_log)
    count_file_logs()


def pick_last_10():
    with open(logs_path, 'r+') as current:
        all_lines = current.readlines()
        last_10 = all_lines[-10:]
    return last_10

def pick_all():
    with open(logs_path, 'r+') as current:
        all_lines = current.readlines()
    return all_lines