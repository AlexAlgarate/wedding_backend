from typing import Optional

import reflex as rx

from wedding.styles import style


def secondary_button(
    button_name: str,
    url: str,
    icon: Optional[str] = None,
    alt: Optional[str] = None,
) -> rx.Component:
    """
    Create a reflex component for a secondary button.

    Args:
        button_name (str): Name of the button.
        url (str): URL to link the button to.
        icon (Optional[str]): Optional icon source.
        alt (Optional[str]): Optional description of the icon image.

    Returns:
        rx.Component: Reflex component for a secondary button.
    """

    button_content = []

    if icon:
        button_content.append(rx.image(src=icon, alt=alt))

    button_content.append(rx.text(button_name))

    return rx.link(
        rx.button(
            *button_content,
            style=style.SECONDARY_BUTTON_STYLE,
        ),
        href=url,
        is_external=True,
    )
