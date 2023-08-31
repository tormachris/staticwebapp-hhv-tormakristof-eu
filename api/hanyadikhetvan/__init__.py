from math import floor
from datetime import date
from urllib import request
import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    startdate = date(2023, 9, 4)
    currentweek = floor((date.today() - startdate).days / 7)
    return func.HttpResponse(
        str(currentweek),
        status_code=200)
