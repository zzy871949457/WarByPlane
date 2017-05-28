function getClassName(classN ,obj){
		//判断obj有对象没，没有默认document
		obj = obj || document;
		//首先判断是不是主浏览器，如果是就直接调用getElementsByClassName();
		if( obj.getElementsByClassName ){
			return obj.getElementsByClassName(classN);
		}else{
			//先获取所有的元素
			var allTagName = obj.getElementsByTagName("*");
			var allLastClassName = [];
			//遍历所有的元素
			for( var i=0;i<allTagName.length;i++ ){
				//把元素class名以空格分割放入数组中
				var arrClass = allTagName[i].className.split(" ");
				// 遍历分割之后的元素
				for( var j=0;j<arrClass.length;j++ ){
					//判断元素名
					if(arrClass[j] == classN){
						//符合条件的添加到数组中
						allLastClassName.push(allTagName[i]);
					}
				}
			}
			return allLastClassName;
		}
	}