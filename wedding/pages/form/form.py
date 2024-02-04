import reflex as rx

from wedding import utils
from wedding.components import (
    card,
    farewell_message,
    flowers_between_section,
    lavender_flowers,
    navbar,
)
from wedding.routes import FileRoutes, Route
from wedding.styles import style


class FormState(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data


def form_example():
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="First Name",
                    name="first_name",
                ),
                rx.input(
                    placeholder="Last Name",
                    name="last_name",
                ),
                rx.hstack(
                    rx.checkbox("Checked", name="check"),
                    rx.switch("Switched", name="switch"),
                ),
                rx.button("Submit", type_="submit"),
            ),
            on_submit=FormState.handle_submit,
            reset_on_submit=True,
        ),
        rx.divider(),
        rx.heading("Results"),
        rx.text(FormState.form_data.to_string()),
    )


@rx.page(
    route=Route.FORM.value, title=utils.title_main, description=utils.description_main
)
def form_wedding() -> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='es'"),
        navbar(),
        lavender_flowers(image=FileRoutes.IMAGE_LAVENDER_TOP.value),
        rx.vstack(
            rx.flex(
                card(
                    form_example(),
                ),
                flowers_between_section(),
                flowers_between_section(),
                direction="column",
                gap="16px",
                align="center",
                width="100%",
                max_width=style.MAX_WIDTH,
            ),
            width="auto",
        ),
        farewell_message(),
        lavender_flowers(
            image=FileRoutes.IMAGE_LAVENDER_BOTTOM.value,
            margin_type=False,
        ),
        width="100%",
        style=style.BASE_STYLE,
        align_items="center",
    )
