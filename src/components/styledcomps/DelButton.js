import glamorous from 'glamorous';

const DelButton = glamorous.button({
    border: "none",
    background: "red",
    color: "black",
    fontSize: 20,
    marginRight: 20,
    ":hover": {
        color: "red",
        background: "black",
    }
});

export default DelButton;