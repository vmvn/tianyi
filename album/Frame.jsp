
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ include file="/systeminfo/init_wev8.jsp" %>
<html> 
<head>
<title></title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="" />
<script language="JavaScript">
if (window.jQuery.client.browser == "Firefox") {
		jQuery(document).ready(function () {
			jQuery("#leftframe,#middleframe,#contentframe").height(jQuery("#leftframe").parent().height());
			window.onresize = function () {
				jQuery("#leftframe,#middleframe,#contentframe").height(jQuery("#leftframe").parent().height());
			};
		});
	}
</script>
</head>
<body  scroll="no" style="padding: 0px;margin: 0px;">
<TABLE class=viewform width="100%" id=oTable1 height="100%">
  <TBODY> 
	<tr> 
		<td  height=100% id=oTd1 name=oTd1 width="246px" style="padding:0px;">
			<IFRAME name=leftframe id=leftframe src="/album/AlbumSubcompanyTree.jsp" width="100%" height="100%" frameborder=no scrolling="no"></IFRAME>
		</td>
		<td height=100% id=oTd2 name=oTd2 width="*" style="padding:0px;">
			<IFRAME name=contentframe id=contentframe src="/album/AlbumList.jsp?1=1" width="100%" height="100%" frameborder=no scrolling=yes></IFRAME>
		</td>
	</tr>
  </TBODY>
</TABLE>
</body>
</html>
