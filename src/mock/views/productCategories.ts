import { API_GET_MODEL_TREE, API_SAVE_MODEL_TREE } from "APIs/tree";

export default {
  layout:[
    {
      name: 'GridRow',
      props: {
          justify: 'space-between',
          alignItems: "center",
          spacing: 1,
      },
      children: [
        {
          name: 'GridColumn',
          props: {
            xs:10,
          },
          children: [          
            {
              name:'TreeEditor',
              props:{
                title:'文章分类',
                elevation:6,
                marginTop:4,
                apiForGet:{
                  ...API_GET_MODEL_TREE,
                  params:{
                    modelName:'/Model/ProductCategory',
                  },      
                },
                apiForSave:{
                  ...API_SAVE_MODEL_TREE,
                  params:{
                    modelName:'/Model/ProductCategory',
                  },
                }
              },
              children:[
                {
                  name:"FormGridContainer",
                  children:[
                    {
                      name: 'PortletGridItem',
                      props:{
                        xs:12,
                      },
                      children:[
                        {
                          name:'TextBox',
                          props:{
                            label:'名称',
                            variant:"outlined",
                            fullWidth:true,
                            field:'name',
                          }
                        }
                      ]
                    },
                    {
                      name: 'PortletGridItem',
                      props:{
                        xs:12,
                      },
                      children:[
                        {
                          name:'TextBox',
                          props:{
                            label:'Slug',
                            variant:"outlined",
                            fullWidth:true,
                            field:'slug',
                          }
                        }
                      ]
                    },
                    {
                      name: 'PortletGridItem',
                      props:{
                        xs:12,                      
                      },
                      children:[
                        {
                          name:'TextBox',
                          props:{
                            label:'描述',
                            variant:"outlined",
                            fullWidth:true,
                            multiline:true,
                            rows:6,
                            field:'description',
                          },
                        }
                      ]
                    },
                  ]
                }
              ]
            }
          ],
        }
      ]
    },
  ] 
}
