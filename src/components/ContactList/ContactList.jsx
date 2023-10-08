export const ContactList = ({ items })=> {
    return <ul>
            {items.map((contact) => (
              <li key={contact.id}>
                <span>{contact.name}: {contact.number}</span>
                <button type="button">Delete</button>
              </li>
            ))}
          </ul>
          
 
        
      
}