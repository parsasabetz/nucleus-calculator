import func_computation

# CODE WRITTEN BY PARSA SABETZADEH

def numeric_meval(user_expression:str):
    try:
        return func_computation.Func_Computation(user_expression)
    except:
        return 'error'