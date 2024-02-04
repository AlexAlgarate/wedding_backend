from typing import Optional

import reflex as rx

from wedding.pages.form.form import form_wedding
from wedding.pages.home.home import index
from wedding.styles import style


async def api_test(item_id: int, name: Optional[str] = None):
    return {"Vecino: ": item_id, "Nombre: ": name}


app = rx.App(stylesheets=style.STYLESHEETS)
app.api.add_api_route("/items/{item_id}", api_test)
