import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AlertComponent,
  AvatarComponent,
  BadgeComponent,
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  ChipComponent,
  DatePickerComponent,
  DateRangePickerComponent,
  DropdownComponent,
  DropdownItemComponent,
  InputComponent,
  ModalComponent,
  ProgressComponent,
  RadioComponent,
  SelectComponent,
  SidenavComponent,
  TabsComponent,
  ToastContainerComponent,
  ToastService,
  ToggleComponent,
  TooltipDirective,
  DateRange,
  DataTableComponent,
  TableColumn,
  SortEvent,
  DrawerComponent,
  DialogService,
  MenuComponent,
  MenuItem,
  PaginatorComponent,
  ExpansionPanelComponent,
  TimePickerComponent,
  FlipCardComponent
} from 'veera-ng-ui-kit';
import { NgIf, NgFor } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog-component/confirm-dialog-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NgFor,
    ButtonComponent,
    ModalComponent,
    AlertComponent,
    CheckboxComponent,
    ChipComponent,
    DropdownComponent,
    DropdownItemComponent,
    ToggleComponent,
    TabsComponent,
    SidenavComponent,
    SelectComponent,
    RadioComponent,
    ProgressComponent,
    TooltipDirective,
    ToastContainerComponent,
    CardComponent,
    BadgeComponent,
    AvatarComponent,
    InputComponent,
    DatePickerComponent,
    DateRangePickerComponent,
    DataTableComponent,
    DrawerComponent,
    MenuComponent,
    PaginatorComponent,
    ExpansionPanelComponent,
    TimePickerComponent,
    FlipCardComponent,
    
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('enterprise-workspace');
  cardFlipped = false;
  meetingTime = '14:30';
  // Viewport structural status states
  activeNavId = 'dashboard';
  activeTab = 'overview';
  drawerOpen = false;
  modalOpen = false;

  // Configuration models
  email = 'admin@acme.corp';
  isChecked = false;
  isSelected = false;
  isEnabled = true;
  billingCycle = 'monthly';
  selectedPlan = 'pro';
  progressValue = 62;
  
  birthDate = '2000-01-15';
  bookingDate = '2026-07-20';

  bookingRange: DateRange = {
    start: '2026-07-20',
    end: '2026-07-25',
  };

  // Navigations configuration items map
  sidenavGroups = [
    {
      label: 'Workspace',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: '▦' },
        { id: 'projects', label: 'Projects', icon: '▤', badge: '31' },
        { id: 'team', label: 'Team', icon: '◐' },
      ],
    },
  ];

  tabs = [
    { id: 'overview', label: 'System Overview' },
    { id: 'activity', label: 'Activity Logs' },
    { id: 'settings', label: 'Configuration' },
  ];

  planOptions = [
    { label: 'Free tier plan', value: 'free' },
    { label: 'Pro production plan', value: 'pro' },
    { label: 'Enterprise infrastructure', value: 'enterprise' },
  ];

  team = [
    { name: 'Jordan Lee', role: 'Engineering Director', status: 'online' as const },
    { name: 'Priya Shah', role: 'Lead Architect UI', status: 'online' as const },
    { name: 'Marcus Webb', role: 'Product Manager', status: 'away' as const },
    { name: 'Aiko Tanaka', role: 'QA Automation Lead', status: 'offline' as const },
  ];

  columns: TableColumn[] = [
    { key: 'name', label: 'System Name', sortable: true },
    { key: 'email', label: 'Identity Token Email', sortable: true },
    { key: 'role', label: 'Access Authorization Tier', sortable: true, align: 'center' },
    { key: 'joined', label: 'Provisioned On', sortable: true, align: 'right' },
  ];

  users = [
    { id: 1, name: 'Asha Patel', email: 'asha@acme.com', role: 'Admin', joined: '2024-02-01' },
    { id: 2, name: 'Ben Osei', email: 'ben@acme.com', role: 'Member', joined: '2023-11-14' },
    { id: 3, name: 'Chen Wu', email: 'chen@acme.com', role: 'Member', joined: '2025-01-30' },
    { id: 4, name: 'Diana Prince', email: 'diana@acme.com', role: 'Admin', joined: '2023-05-12' },
    { id: 5, name: 'Evan Wright', email: 'evan@acme.com', role: 'Member', joined: '2026-02-18' },
    { id: 6, name: 'Fiona Gallagher', email: 'fiona@acme.com', role: 'Member', joined: '2024-09-01' },
    { id: 7, name: 'George Costanza', email: 'george@acme.com', role: 'External', joined: '2025-11-04' }
  ];

  pageIndex = 0;
  pageSize = 5;

  menuItems: MenuItem[] = [
    { label: 'Edit Properties', icon: 'edit', shortcut: 'Ctrl+E' },
    { label: 'Show Workspace Grid', icon: 'grid_view', checked: true },
    {
      label: 'Security Clearances',
      icon: 'settings',
      children: [
        { label: 'Profile Token', icon: 'person' },
        { label: 'Encryption Keys', icon: 'lock' }
      ]
    }
  ];

  constructor(private toast: ToastService, private dialog: DialogService) { }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.dialog.closeTop();
  }

  // Intercept primary viewport updates
  onNavChange(navId: string): void {
    this.activeNavId = navId;
    if (navId === 'dashboard') {
      this.activeTab = 'overview';
    }
  }

  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  // Control handlers
  onToggleChange(value: boolean) {
    this.isEnabled = value;
  }

  onChipSelection(selected: boolean) {
    console.log('Chip Selection Updated:', selected);
  }

  onChipRemove() {
    console.log('Chip structural token removed');
  }

  onBillingChange(value: string) {
    this.billingCycle = value;
  }

  triggerToast() {
    this.toast.show('Workspace configuration changes saved successfully.');
  }

  onRangeChange(range: DateRange) {
    console.log('Ecosystem processing range shifted:', range.start, '→', range.end);
  }

  onSelectionChange(selected: any[]) {
    console.log('Grid Selection Matrix Changed:', selected);
  }

  onSort(event: SortEvent) {
    console.log('Sorting field action executed:', event.key, event.direction);
  }

  openDrawer(): void {
    this.drawerOpen = true;
  }

  onDrawerChange(open: boolean): void {
    this.drawerOpen = open;
  }

  applyFilters(): void {
    this.drawerOpen = false;
    this.toast.show('Downstream view filters injected correctly.');
  }

  get pagedUsers() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    return this.users.slice(start, end);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  onMenuClick(event: any) {
    console.log('Context menu configuration item dispatched:', event);
  }

  deleteProject() {
    const ref = this.dialog.open<ConfirmDialogComponent, boolean>(ConfirmDialogComponent, {
      data: {
        title: 'Decommission Entire Active Workspace',
        message: "Are you certain? This fully purges structural metadata and connected assets. This cannot be undone.",
        confirmLabel: 'Force Delete Workspace',
        danger: true,
      },
      width: '480px',
    });

    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.toast.show('Active project database layer successfully wiped clean.');
      }
    });
  }
}