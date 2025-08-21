export default function HeaderInsider() {
  return (
    <div style={styles.header}>
      {/* Left Section: Dots + Logo */}
      <div style={styles.left}>
        <div style={styles.dotsContainer}>
          {[...Array(9)].map((_, i) => (
            <div key={i} style={styles.dot}></div>
          ))}
        </div>

        {/* Logo image */}
        <img
          src="/src/assets/logo.png"
          alt="Logo"
          style={styles.logo}
        />
      </div>

      {/* Right Section: User Image */}
      <div>
        <img
          src="/src/assets/user.png"
          alt="User"
          style={styles.userImage}
        />
      </div>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: 'white',
    
    padding: '5px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    width: '100%',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  dotsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 4px)',
    gap: '4px',
  },
  dot: {
    width: '4px',
    height: '4px',
    backgroundColor: 'grey',
    borderRadius: '50%',
  },
  logo: {
    height: '40px',
    width: '100px',
    objectFit: 'contain',
  },
  userImage: {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};
