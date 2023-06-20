function Message() {
    // JSX: Javascript XML
    const name: string = 'James';
    // const name: string | null = null;
    return <h1>Hello {name || 'World'}</h1>;
}

export default Message;