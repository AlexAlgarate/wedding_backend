import reflex as rx

from wedding import utils
from wedding.components import icon_section
from wedding.routes import IconRoutes as icon
from wedding.styles import FontWeight, Size, style


def destination() -> rx.Component:
    return rx.vstack(
        rx.hstack(icon_section(icon=icon.ICON_UBICATION.value, width=Size.BIG.value)),
        rx.text(utils.bus_destination_title, style=style.BUS_TITLE_SECTION),
        rx.spacer(),
        _bus_text_destination(),
        width="100",
    )


def _bus_text_destination() -> rx.Component:
    return rx.flex(
        rx.box("Salidas de La Agripina "),
        rx.box(
            "a las ",
            rx.span("02:00", font_weight=FontWeight.BOLD.value),
            " y a las ",
            rx.span("05:00", font_weight=FontWeight.BOLD.value),
        ),
        rx.box("con destino"),
        rx.span(
            utils.hotel_name,
            font_weight=FontWeight.BOLD.value,
            text_wrap="balance",
        ),
        rx.span(
            utils.hotel_address,
            font_weight=FontWeight.BOLD.value,
            text_wrap="balance",
        ),
        direction="column",
        align="center",
        font_size=[
            Size.MAIN_TEXTS.value,
            Size.MAIN_TEXTS.value,
            Size.MAIN_TEXTS.value,
            Size.MAIN_TEXTS.value,
            Size.MAIN_TEXTS.value,
        ],
    )
