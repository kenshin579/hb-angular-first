# 

목표: 서비스로 상태 공유하기

- ResultGraphComponent는 체크항목의 통계를 내기 위하여 전체 항목 수와, 현재 체크된 항목 수를 알아야 함
  ㅁ. 체크된 항목의 수: CheckListResultComponent (부모)
  ㅁ. 전체 항목의 수: CheckListComponent
  ㅁ. 전체 항목 & 체크된 항목은 서비스로 공유함: ResultGraphComponent에서 사용하도록
  

check-list-data.service
- 서비스가 체크된 CheckItem item 정보를 다 들고 있음
 
check-list.component.html
- 

check-list-result.component
- 사용자가 checkitem을 선택하면 체크 항목에 리스트로 나옇하게 됨
  ㅁ.set checkItem이 호출됨

result-graph.component
- check-list-data 서비스에서 정보를 받음
