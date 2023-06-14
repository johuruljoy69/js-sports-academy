

const AdminCard = ({admin}) => {
    const {name, photo, email} = admin;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default AdminCard;