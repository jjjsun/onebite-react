const Welcome = ({name, isMember}) => {
    return (
        <h2>
            {isMember === true ? `${name}님 다시 오셨군요` : `${name}님 가입하시겠어요?`}
        </h2>
    )
}

export default Welcome;