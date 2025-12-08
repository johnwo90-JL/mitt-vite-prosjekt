import "./custom-button.component.css";

export function CustomButton(defaultText = "Click me!", disabledText = "Clicked!", timeout = 1000) {
    const buttonElement = document.createElement("button");
    buttonElement.className = "custom-button";
    buttonElement.textContent = defaultText;

    buttonElement.addEventListener("click", event => {
        if (buttonElement.disabled) {
            return;
        }

        buttonElement.disabled = true;
        buttonElement.textContent = disabledText;

        setTimeout(() => {
            buttonElement.disabled = false;
            buttonElement.textContent = defaultText;
        }, timeout);
    });

    return buttonElement;
}