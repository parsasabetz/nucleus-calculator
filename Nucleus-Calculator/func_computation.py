from math import log10, log, factorial
import parser
parser = parser.NumericStringParser()


def check_tech(expression):
    log_count = int(expression.count('log('))
    Ln_count = int(expression.count('Ln('))
    factorial_count = int(expression.count('factorial('))
    total_func_count = log_count + Ln_count + factorial_count
    for function_counts in range(total_func_count):
        return func_detect_compute(expression)


def Func_Computation(expression:str):
    try:
        if ( ('log(' in expression) or ('Ln(' in expression) or ('factorial(' in expression) ):
            return check_tech(expression)
        elif( 'error' in expression ):
            return 'error'
        else:
            return float(parser.Meval(expression))
    except:
            return float(parser.Meval(expression))


def func_detect_compute(exp:str):
    orig_exp = exp
    final_detection = ''
    final_res = 0

    if (exp.count('Ln(')):
        Ln_open = 0
        last_par = 0
        index_of_Ln = exp.find('Ln') # Spot: Ln in the original expression
        from_Ln_to_end = exp[index_of_Ln:] # Range: from where Ln is located to the end of expression

        for index, chars in enumerate(from_Ln_to_end): # Iterate through the expression from the first Ln found inside it
            if (from_Ln_to_end[index] == "("):
                Ln_open += 1
            elif (from_Ln_to_end[index] == ")"):
                Ln_open -= 1
                if (Ln_open == 0):
                    last_par = index
                    break

        inner_exp_location = from_Ln_to_end[3 : last_par] #inner expression inside Ln
        entire_expression = from_Ln_to_end[0 : last_par+1] # the entire Ln() and its expression
        try:
            final_detection = Func_Computation(inner_exp_location)
        except:
            return 'error'
        try:
            final_res = log(final_detection)
        except:
            return 'error'
        exp = exp.replace(entire_expression, str(final_res))
        Func_Computation(exp)
        return Func_Computation(exp)


    elif (exp.count('log(')):
        log_open = 0
        last_par = 0
        index_of_log = exp.find('log')
        from_log_to_end = exp[index_of_log:]

        for index, chars in enumerate(from_log_to_end):
            if (from_log_to_end[index] == "("):
                log_open += 1
            elif (from_log_to_end[index] == ")"):
                log_open -= 1
                if (log_open == 0):
                    last_par += index
                    break

        inner_exp_location = from_log_to_end[4 : last_par] #inner expression inside log
        entire_expression = from_log_to_end[0 : last_par+1] # the entire log() and its expression
        try:
            final_detection = Func_Computation(inner_exp_location)
        except:
            return 'error'
        try:
            final_res = log10(final_detection)
        except:
            return 'error'
        exp = exp.replace(entire_expression, str(final_res))
        Func_Computation(exp)
        return Func_Computation(exp)


    elif (exp.count('factorial(')):
        fac_open = 0
        last_par = 0
        index_of_fac = exp.find('factorial')
        from_fac_to_end = exp[index_of_fac:]

        for index, chars in enumerate(from_fac_to_end):
            if (from_fac_to_end[index] == "("):
                fac_open += 1
            elif (from_fac_to_end[index] == ")"):
                fac_open -= 1
                if (fac_open == 0):
                    last_par += index
                    break

        inner_exp_location = from_fac_to_end[10 : last_par] #inner expression inside factorial
        entire_expression = from_fac_to_end[0 : last_par+1] # the entire factorial() and its expression
        try:
            final_detection = Func_Computation(inner_exp_location)
        except:
            return 'error'
        try:
            final_res = factorial(int(final_detection))
        except:
            return'error'
        exp = exp.replace(entire_expression, str(final_res))
        Func_Computation(exp)
        return Func_Computation(exp)

# CODE COMPLETELY DEVELOPED BY PARSA SABETZADEH, ALGORITHMS ARE NOT COPIED!