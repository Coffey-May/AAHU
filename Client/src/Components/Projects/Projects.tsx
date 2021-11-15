import Card from './CardComponent';
import Memphis from '../../assets/memphis.png';

const projectData = [
   { title: 'Multi Step Form', description: 'ndfkjfndks', imageMultiForm: `${Memphis}`, linkMultiForm: '/multi-step-form', bgColor: '#688E26' },
   { title: 'Piet Mondrian Grocery List', description: 'kjsebfkjebfjkeb', imageMultiForm: `${Memphis}`, linkMultiForm: 'https://coffey-may-coffey-may-merntime.zeet.app/', bgColor: '#FAA613' },
   { title: 'Coffey May Fine Art', description: 'kjsebfkjebfjkeb', imageMultiForm: `${Memphis}`, linkMultiForm: 'https://coffeymayart.com', bgColor: '#F44708' },

   { title: 'Coffey May Fine Art', description: 'kjsebfkjebfjkeb', imageMultiForm: `${Memphis}`, linkMultiForm: 'https://coffeymayart.com', bgColor: '#F43E8A' },
]

const Projects = () => {
   return (
      <>
         <div>
            {projectData.map((projectData, index) => {
               return (
                  <Card projectData={projectData} key={index} />
               )
            })}
         </div>
         {/* <Card/> */}

         {/* <div style={{height:'70vh',width:'100%',margin:'0 auto',backgroundColor:'#FAA613' }}>
            
            <div style={{width:'80%',margin:'0 auto', backgroundColor:'blue' }}>
         dff
            </div>
        
      </div>
      <div style={{height:'70vh',width:'100%',margin:'0 auto',backgroundColor:'#F44708' }}>
            
            <div style={{width:'80%',margin:'0 auto', backgroundColor:'blue' }}>
         dff
            </div>
        
      </div>
      <div style={{height:'70vh',width:'100%',margin:'0 auto',backgroundColor:'#F43E8A' }}>
            
            <div style={{width:'80%',margin:'0 auto', backgroundColor:'blue' }}>
         dff
            </div>
        
      </div>     */}
      </>
   )
}

export default Projects