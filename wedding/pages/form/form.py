import reflex as rx

from wedding import utils
from wedding.components import (
    farewell_message,
    flowers_between_section,
    lavender_flowers,
)
from wedding.routes import FileRoutes, Route
from wedding.styles import style


@rx.page(
    route=Route.FORM.value, title=utils.title_main, description=utils.description_main
)
def form_wedding() -> rx.Component:
    return rx.box(
        rx.script("document.documentElement.lang='es'"),
        lavender_flowers(image=FileRoutes.IMAGE_LAVENDER_TOP.value),
        rx.vstack(
            rx.flex(
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
