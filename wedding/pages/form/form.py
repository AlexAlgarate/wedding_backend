from typing import Optional

import reflex as rx
import reflex.components.radix.themes as rdxt
from reflex import el

from wedding import utils
from wedding.components import card, farewell_message, navbar
from wedding.routes import Route
from wedding.styles import style


class FormState(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data


def form_example(id: str):

    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Numero 1",
                    id=id,
                ),
                rx.input(
                    placeholder="Numero 2",
                    id="numero2",
                ),
                rx.button("Submit", type_="submit"),
            ),
            on_submit=FormState.handle_submit,
            reset_on_submit=True,
        ),
        rx.divider(),
        rx.heading("Results"),
        rx.text(FormState.form_data.to_string()),
        rx.cond(
            id,
            rx.text("PRRRRRR EL MORENO DE PORTUGALETE", color="red"),
            rx.text("BUNI ERES UN COMEPOLLAS", color="blue"),
        ),
        el.button(
            "Click me",
            class_name="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        ),
        el.div("hola caracolap"),
    )


@rx.page(
    route=Route.FORM.value, title=utils.title_main, description=utils.description_main
)
def form_wedding() -> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='es'"),
        navbar(),
        rx.vstack(
            rx.flex(
                card(form_example("6")),
                direction="column",
                gap="16px",
                align="center",
                width="100%",
                max_width=style.MAX_WIDTH,
            ),
            width="auto",
        ),
        farewell_message(),
        width="100%",
        style=style.BASE_STYLE,
        align_items="center",
    )


async def repo() -> str:
    return "https://github.com/AlexAlgarate/wedding_backend"


async def live(user: str) -> bool:
    if user == "alex":
        return True
    return False
