function makeMap(str, expectsLowerCase) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }

  return expectsLowerCase ? val => map[val.toLowerCase()] : val => map[val]
}



/**
 * 检查是否 svg 元素
 * base code copy from https://github.com/vuejs/vue/blob/main/src/platforms/web/util/element.ts#L25
 * MIT LICENSE
 * 
 * @type {(val: string) => boolean}
 */
export const isSvg = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
)
