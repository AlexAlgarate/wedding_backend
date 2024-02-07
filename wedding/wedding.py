from typing import Optional

import reflex as rx

from wedding.pages.form.form import form_wedding, live, repo
from wedding.pages.home.home import index
from wedding.styles import style

app = rx.App(stylesheets=style.STYLESHEETS)
app.api.add_api_route("/repo", repo)
app.api.add_api_route("/live/{user}", live)
