import React, { Fragment } from 'react';
import { resolveNode } from 'components/resoveNode';
import { RXElement } from './RXElement';
import { PageActionHandle } from './PageAction';

export default function ElementRender(props:{element:RXElement, formik:any, onPageAction: PageActionHandle}){
  const {element, formik, onPageAction} = props;
  const onClickAction = element.meta.props?.onClick;
  const Element = resolveNode(element.meta.name);
  const handleOnClick = ()=>{
    if(!onClickAction){
      return
    }
    onPageAction(onClickAction);
  };

  //const field = element.meta.props?.field;

  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = formik;
  let metaProps = element.meta.props? element.meta.props :{};
  const {rxText, field, ...rest} = metaProps as any;

  let elementProps:any = {...rest,  onClick:handleOnClick}
  //console.log(formik);
  const value = field && values && values[field];
  if(field){
    elementProps = {
      ...elementProps,
      name: field,
      value: value || '',
      error: errors[field] && touched[field],
      onChange: handleChange,
      onBlur: handleBlur,
      helperText: (errors[field] && touched[field]) && errors[field],    
    }
  }

  const elementView = (element.children && element.children.length > 0) || rxText ?
    (<Element {...elementProps}>
      {rxText}
      {element.children?.map((child: RXElement)=>{
        return (
          <ElementRender key={child.id} element={child} formik={formik} onPageAction={onPageAction}/>
        )
      })}
    </Element>)
    :
    <Element {...elementProps} />

  return(
    <Fragment>
    { elementView }
    </Fragment>
  )
}
